import React, { useState } from 'react'
import { getExplorerLink } from '../../utils/getExplorerLink'
import { ComponentGrid } from '../helpers'
import { Title, Textfield } from 'db-ui-toolkit'
import { mainnet } from 'viem/chains'
import { type Address } from 'viem'

import Hash from '../../components/Hash'

const HashDemo = () => {
  const [hash, setHash] = useState<Address>()
  const currentChainId = mainnet

  return (
    <div>
      <Title>Hash</Title>
      <ComponentGrid>
        <Textfield
          placeholder="Hash"
          onChange={(e) => setHash(e.target.value as Address)}
          value={hash}
        />
        {hash && (
          <Hash
            explorerURL={getExplorerLink({ chain: currentChainId, hashOrAddress: hash })}
            hash={hash}
            onCopy={() => console.log(hash)}
            showCopyButton
          />
        )}
      </ComponentGrid>
    </div>
  )
}

export default HashDemo
