// Core
// Components
import {
    Container,
    Title,
    TopBar
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
            </Container>
            <TopBar/>
            <Container className='pb-14'>
                <div className='flex gap-[60px]'>
                    <Filters />
                </div>
                <div className='flex-1'>
                    <div className='flex flex-col gap-16'>
                        Product list
                    </div>
                </div>
            </Container>
        </>
    );
}
