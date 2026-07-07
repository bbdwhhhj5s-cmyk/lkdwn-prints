import Container from "./Container";

export default function Section({
  children,
  className = "",
  containerClassName = "",
  as: Component = "section",
  id,
}) {
  return (
    <Component
      id={id}
      className={`
        relative
        py-24
        md:py-32
        ${className}
      `}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </Component>
  );
}