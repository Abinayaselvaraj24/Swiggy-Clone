const Body=(props)=>{
    const name="Abi"
    return(
      <>
    <h3>
      Body Component
    </h3>
    <h3>
      Name:{props.name}
      <br/>
      <br/>
      Age:{props.age}
    </h3>
    <div>
      {2+2}
    </div>
    </>
    )
  }
export default Body