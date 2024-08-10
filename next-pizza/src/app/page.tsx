// Core
// Components
import {
    Container,
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
          </Container>
      </>
  );
}
