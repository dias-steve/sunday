import Col from "react-bootstrap/Col";

export default function ScoopOptions({ name, imagePath }) {
  return (
    <Col xs={12} sm={6} md={4} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3050/${imagePath}`}
        alt={`${name} scoop`}
      />
    </Col>
  );
}
