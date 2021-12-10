import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const ItemIpad = ({ itemIpad }) => {
    return (
        <div className='ItemIpad'>
          <Card>
    <Image src={itemIpad.Imagen} wrapped ui={false} alt={itemIpad.Nombre} />
    <Card.Content>
      <Card.Header>{itemIpad.Nombre}</Card.Header>
      <Card.Meta>
        <span className='date'>{itemIpad.Precio}</span>
      </Card.Meta>
      <Card.Description>
      {itemIpad.Descripcion}
    </Card.Description>
    </Card.Content>
  </Card>
        </div>
    )
}

export default ItemIpad
