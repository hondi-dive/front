const Section = ({ title, children }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <div
        style={{
          color: 'black',
          fontSize: 16,
          fontWeight: 500,
          lineHeight: '32px',
        }}
      >
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Section;
