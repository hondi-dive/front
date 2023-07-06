const Section = ({ title, children }) => {
  return (
    <div style={{ marginBottom: '20px', width: '100%' }}>
      <div
        style={{
          color: 'black',
          fontSize: 16,
          fontWeight: 500,
          lineHeight: '32px',
          width: '100%',
        }}
      >
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Section;
