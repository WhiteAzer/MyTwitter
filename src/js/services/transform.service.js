class TransformService {
    fbPostsTransform( fbData ) {
        return Object.keys( fbData ).map( key => {
            fbData[key].id = key
            return fbData[key]
        } )
    }
}

export const transformService = new TransformService()