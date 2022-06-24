class TransformService {
    fbPostsTransform( fbData ) {
        return Object.keys( fbData ).map( key => {
            fbData[key].key = key
            return fbData[key]
        } )
    }
}

export const transformService = new TransformService()