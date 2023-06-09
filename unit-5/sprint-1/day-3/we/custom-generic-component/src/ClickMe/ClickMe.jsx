// We are useing throttle to let user click only after delayed given time
import useThrottling from "./throttling";
// we are using de bouncing to avoid two many types of click
import useDebounce from "./useDebounce";

const ClickMe = () => {
  const handleCLick = () => {
    console.log(`Network request made`);
  };

  //   const debounce = useDebounce(handleCLick, 1500);

  const throttle = useThrottling(handleCLick, 5000);

  return (
    <div>
      <button onClick={throttle}>Click Me</button>
    </div>
  );
};

export default ClickMe;

/*
  Debouncing

let { current: id } = useRef();
  return () => {
    id && clearTimeout(id);
    id = setTimeout(() => {
      func();
    }, delay);
  };
 */

/*
  Throttling
let { current: wait } = useRef(false);
  return () => {
    if (wait) return;
    func();
    wait = true;
    setTimeout(() => {
      wait = false;
    }, delay);
  };

*/
