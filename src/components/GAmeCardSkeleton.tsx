import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GAmeCardSkeleton = () => {
  return (
    <div>
      <Card width={'100%'} borderRadius={10} overflow={'hidden'}>
        <Skeleton height={'200px'}/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
      </Card>
    </div>
  )
}

export default GAmeCardSkeleton
