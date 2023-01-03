import { useRouter } from "next/router";
import { it } from "node:test";
import Autocomplete from "react-google-autocomplete";

export default function AccommodationDetails() {
  const router = useRouter();
  const pid = router.query;

  return (
    <>
      <div>
        <h2>Welcome to accommodation details of {pid?.slug}</h2>
        <h2> {pid?.slug}</h2>
      </div>
    </>
  );
}
