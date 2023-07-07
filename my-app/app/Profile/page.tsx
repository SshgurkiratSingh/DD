import getCurrentUser from "../actions/getCurrentUser";
import Button from "../components/Button";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import Container from "../components/container";
import ProfileBox from "./ProfileBox";

export default async function Home() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        {" "}
        <Container>
          <EmptyState
            title="You need to login to view this page"
            subtitle="Please Login to continue"
          />
        </Container>
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <ProfileBox currentUser={currentUser} />
      </Container>
    </ClientOnly>
  );
}