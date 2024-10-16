import React from 'react';

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string}
}

const PruductPage = ({params: { slug }, searchParams: { sortOrder}}: Props) => {
  return (
    <div>
     product page {slug} {sortOrder}
    </div>
  )
}

export default PruductPage;
