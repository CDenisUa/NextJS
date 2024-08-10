// Core
// Components
import {Container} from "@/components/shared";
import {Title} from "@/components/shared/title/Title";

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
