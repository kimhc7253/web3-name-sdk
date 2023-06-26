import { expect } from 'chai'
import { createSID } from '../src'

describe('SID Name resolving', () => {
  it('it should properly resolve address', async () => {
    const sid = createSID()
    const domainName = await sid.getDomainName('0xb5932a6b7d50a966aec6c74c97385412fb497540')
    expect(domainName).to.be.eq('spaceid.eth')
  }).timeout(10000)

  it('it should properly resolve address based on chain ID', async () => {
    const sid = createSID()
    const domainName = await sid.getDomainName('0xb5932a6b7d50a966aec6c74c97385412fb497540', 56)
    expect(domainName).to.be.eq('spaceid.bnb')
  }).timeout(10000)

  it('it should properly resolve a .bnb domain name', async () => {
    const sid = createSID()
    const address = await sid.getAddress('spaceid.bnb')
    expect(address?.toLowerCase()).to.be.eq('0xb5932a6b7d50a966aec6c74c97385412fb497540')
  }).timeout(10000)

  it('it should properly resolve a .arb domain name', async () => {
    const sid = createSID()
    const address = await sid.getAddress('spaceid.arb')
    expect(address?.toLowerCase()).to.be.eq('0xb5932a6b7d50a966aec6c74c97385412fb497540')
  }).timeout(10000)
})
