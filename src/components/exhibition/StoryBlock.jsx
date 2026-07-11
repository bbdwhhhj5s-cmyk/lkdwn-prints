export default function StoryBlock({
  heading,
  text,
  image,
  reverse = false,
}) {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "80px",
        alignItems: "center",
        padding: "140px 10%",
        background: "#0B1016",
      }}
    >
      {!reverse && (
        <img
          src={image}
          alt={heading}
          style={{ width: "100%", borderRadius: "8px" }}
        />
      )}

      <div>
        <h2
          style={{
            color: "white",
            fontSize: "3rem",
            marginBottom: "30px",
          }}
        >
          {heading}
        </h2>

        <p
          style={{
            color: "#A5ADB5",
            fontSize: "1.2rem",
            lineHeight: 1.8,
          }}
        >
          {text}
        </p>
      </div>

      {reverse && (
        <img
          src={image}
          alt={heading}
          style={{ width: "100%", borderRadius: "8px" }}
        />
      )}
    </section>
  );
}