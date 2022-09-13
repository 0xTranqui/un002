import { NFTPreview, MediaConfiguration } from "@zoralabs/nft-components";
import { MediaFetchAgent, Networks, Strategies } from "@zoralabs/nft-hooks"
import { ourCollection } from "../constants/Constants";



const zdkStrategyMainnet = new Strategies.ZDKFetchStrategy(
    Networks.MAINNET
)

const STYLE_OVERRIDE = {
    theme: {
    bodyFont: `font-family: courier, "Courier New", andale mono, monaco, monospace, sans serif;`,
    titleFont: `font-family: courier, "Courier New", andale mono, monaco, monospace, sans serif;`,
    borderStyle: "dashed 1px",
    defaultBorderRadius: 0,
    preferredIPFSGateway: "https://ipfs.io/ipfs/",
    showOwner: false,
    showCreator: false,
    previewCard: {
        background: '#f5f5f5'
    },
    padding: '3px',
    showTxnLinks: true,
    useEnsResolution: true,
    useCollectionTag: true,
    },
  };

const NFTCard = ({ nfts }) => {

    console.log("what info is coming in: ", nfts);

    return (
        <>
            {
            nfts && nfts.length > 0
            ?
            nfts.map((nft, index) => {
                console.log("how many nfts: ", nfts.length)
                return (
                
                    <div key={nft} className="w-10/10 sm:w-5/5 md:w-3/3 flex flex-col flex-wrap justify-center">
                    
                        <MediaConfiguration
                        style={STYLE_OVERRIDE}
                        networkId="1"                        
                        strategy={zdkStrategyMainnet}
                        strings={{
                            CARD_OWNED_BY: "↳",
                            CARD_CREATED_BY: "↳",
                                                    
                        }}   
                                        
                        >
                        <NFTPreview
                            
                            href={`https://zora.co/collections/${ourCollection}/${nft}`}
                            contract={ourCollection}
                            id={nft}
                            showBids={false}
                            showPerpetual={false} 
                                            
                        />
                        </MediaConfiguration>
                    </div>
                )
            }
            ) : (
                <div>
                    {"꒰⁎×﹏×⁎꒱ ༘ؓ ँั๊ྃ"}
                </div>
            )
            }
        </>
    )
}

export default NFTCard