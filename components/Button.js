import Button from "react-bootstrap/Button";
import Link from "next/link";

export default props => {
  return (
    <Link href={props.href}>
      <Button style={{ margin: "5px" }} variant="outline-primary">
        {props.children}
      </Button>
    </Link>
  );
};
