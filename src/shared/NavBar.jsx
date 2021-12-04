import { Link } from "react-router-dom"
import { Container} from "../styles/Container"
import { Flex } from "../styles/Flex"
import './index.css'

export const NavBar = () => {
    return (
        <>
            <Container>
                <Flex>
                    <Link className ='title' to="/"><h1 className ='title' >Book App</h1></Link>
                    <Link className ='createTile' to="/create-book">+Add Book</Link> 
                </Flex> 
            </Container>
        </>
    )
}