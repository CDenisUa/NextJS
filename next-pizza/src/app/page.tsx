// Core
// Components
import {
    Categories,
    Container,
    SortPopup,
    Title
} from "@/components/shared";

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title
                    className='font-extrabold'
                    text='All the pizzas'
                    size='lg'
                />
                <Categories/>
                <SortPopup/>
            </Container>
        </>
    );
}
