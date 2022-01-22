import './Page.css';

function Post(props) {
    const { id, title, body } = props.data;
    return (
      <div className="post d-flex shadow card p-3 bg-light" style={{marginBottom:'20px', marginLeft:"380px"}}>
        <h5 className='text-primary text-center'>{id}</h5>
        <hr/>
        <h3 className='text-primary'>{title}</h3>
        <p>{body}</p>
        
      </div>
    );
  }
export default Post 