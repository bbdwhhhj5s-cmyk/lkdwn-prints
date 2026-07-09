import Container from "./Container";

export default function Section({
  children,
  className = "",
  containerClassName = "",
  id,
}) {
  return (
    <section
      id={id}
      className={`relative py-24 md:py-32 ${className}`}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}