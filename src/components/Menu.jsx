import Item from './Item'

function Menu({data}) {
    return (
      <div className="menu-container">
        {data.map((itemInfo) => <Item itemInfo={itemInfo} key={itemInfo.id}/>)}
      </div>
    );
}

export default Menu