import './Page.css';

function Post(props) {
    const { id, title, body } = props.data;
    return (
      <div className="post d-flex shadow card p-3 bg-light col-5 " style={{marginLeft:'350px', marginTop:'20px',height:'200px'}} >
      {/*  <div className='card cardclass'> */}

        <h5 className='text-primary text-center'>{id}</h5>
        <hr/>
        <h3 className='text-primary'>{title}</h3>
        <p>{body}</p>
        
      </div>
    );
  }
export default Post 