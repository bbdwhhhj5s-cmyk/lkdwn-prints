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
        overflow-hidden
        py-32
        lg:py-44
        ${className}
      `}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </Component>
  );
}