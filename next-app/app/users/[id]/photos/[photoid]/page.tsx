import React from 'react';

interface Props {
  params: {id: number; photoId: number}
}

const Photos = ({params: {id, photoId}} :Props) => {
  return (
    <div>
      photo{id} {photoId}
    </div>
  )
}

export default Photos;
