import React from 'react';
import { Container,Input, Stack,Button, Heading } from '@chakra-ui/react';
import { PinInput, PinInputField,HStack,Select } from '@chakra-ui/react'

const FormExample = () => {

    const [loading,setLoading] = React.useState(false)

    const [formState,setFormState] = React.useState({
        email:"",
        password:"",
        otp:"",
        country:""
    }) ;
    
    const hadleCLick = () => {
        setLoading(true)
        setTimeout(()=>{
            console.log(`form data is Posted`,formState)
            setLoading(false)
        },1000)
    }

  return (
    <Container>
      <Stack spacing="30px">
        <Heading>Our Form</Heading>
        <Input 
        type="email"
        placeholder="email"
        value={formState.email}
        onChange={(e)=>{
            setFormState({...formState,email:e.target.value})
        }}
        />


        <Input 
        type="password"
        placeholder="password"
        value={formState.password}
        onChange={(e)=>{
            setFormState({...formState,password:e.target.value})
        }}
        />

        <Select 
        placeholder='Select Country'
        value={formState.country}
        onChange={(e)=>{
            setFormState({...formState,country:e.target.value})
        }}
        >
        <option value='india'>India</option>
        <option value='england'>England</option>
        <option value='usa'>USA</option>
        </Select>

        <Button onClick={hadleCLick} variant="outline" colorScheme="red" isLoading={loading}>REGISTER</Button>
        <HStack>
        <PinInput otp value={formState.otp}
        onChange={(value)=>{
            setFormState({...formState,otp:value})
        }} 
        type='alphanumeric' mask>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
        </PinInput>
        </HStack>
      </Stack>
    </Container>
  )
}

export default FormExample
