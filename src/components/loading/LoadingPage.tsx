import classes from './Loading.module.css';

const LoadingPage = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
      <div className={classes.customLoader}>
        {/* <div style={{ width: '500px' }}> */}
          {/* <img src={`${driveUrl}${data.logo}`} style={{ width: '100%', height: 'auto' }} alt="Logo" /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default LoadingPage;
