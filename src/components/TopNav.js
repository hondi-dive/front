import { useNavigate } from 'react-router-dom';

const TopNav = ({ title, actionName, action }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: 64,
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: 23,
        position: 'fixed',
        margin: '0 auto',
        top: 0,
        backgroundColor: 'white',
        width: '345px',
        boxShadow: '0px 0px 12px 3px rgba(56, 56, 56, 0.10)',
      }}
    >
      <div
        onClick={() => {
          navigate(-1);
        }}
      >
        <img src="/img/back.svg" width={20} height={20} />
        뒤로가기
      </div>
      <div>{title}</div>
      <div
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: '#426BFF',
        }}
        onClick={action}
      >
        {actionName}
      </div>
    </div>
  );
};

export default TopNav;
