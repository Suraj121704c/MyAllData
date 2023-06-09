import {
  Button,
  Input,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";


export default function Dashboard() {
  const [data, setData] = React.useState([]);
  const [order, setOrder] = React.useState("");
  const [q, setq] = React.useState("");

  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Input = () => <div />;
  // const Table = () => <div />;
  // const TableContainer = () => <div />;
  // const Tbody = () => <div />;
  // const Th = () => <div />;
  // const Thead = () => <div />;
  // const Tr = () => <div />;

  const fetchAndUpdate = (q) => {
    // getData(
    //   `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses?q=${q}&_sort=rent&_order=${order}`
    // )
    // let apiUrl = getUrl(
    //   `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses?q=${q}`
    // )
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses?q=${q}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log(data)

  React.useEffect(() => {
    fetchAndUpdate(q);
  }, [q]);


  const deleteTodos = (id) => {
    return axios({
      method: "delete",
      url: `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses/${id}`,
    });
  };

  const handleDelete = (id) => {
    deleteTodos(id);
    fetchAndUpdate(order, q);
  };

  const fetchAndUpdate2 = (order) => {
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses?_sort=rent&_order=${order}`)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }
 

  return (
    <div>
      <div className="sortingButtons">
        <Button className="sortByRentAsc" onClick={() => fetchAndUpdate2("asc")}>
          {" "}
          Sort by Asc{" "}
        </Button>
        <Button className="sortByRentDesc" onClick={() => fetchAndUpdate2("desc")}>
          {" "}
          Sort by Desc{" "}
        </Button>
      </div>

      <Input
        className="searchAddress"
        placeholder="Search Data"
        onChange={(e) => setq(e.target.value)}
      />

      <TableContainer>
        <Table className="table">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Owner's Name</Th>
              <Th>Address</Th>
              <Th>Area Code</Th>
              <Th>Rent</Th>
              <Th>Bachelor Tenants Allowed</Th>
              <Th>Married Tenants Allowed</Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* Map the below container against your data */}
            {/* <Tr className = "houseDetails"  >
                  <Td className = "name" ></Td>
                  <Td className = "ownersName" ></Td>
                  <Td className = "address" ></Td>
                  <Td className = "areaCode" ></Td>
                  <Td className = "rent" ></Td>
                  <Td className = "isBachelorAllowed" ></Td>
                  <Td className = "isMarriedAllowed" ></Td>
                  <Td className = "delete" > Delete </Td>
              </Tr> */}
            {data.map((el) => (
              <Tr className="houseDetails" key={el.id}>
                <Td className="name">{el.name}</Td>
                <Td className="ownersName">{el.ownerName}</Td>
                <Td className="address">{el.address}</Td>
                <Td className="areaCode">{el.areaCode}</Td>
                <Td className="rent">{el.rent}</Td>
                <Td className="isBachelorAllowed">
                  {el.isBachelorAllowed ? "Yes" : "No"}
                </Td>
                <Td className="isMarriedAllowed">
                  {el.isMarriedAllowed ? "Yes" : "No"}
                </Td>
                <Td className="delete" onClick={() => handleDelete(el.id)}>
                  {" "}
                  Delete{" "}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
