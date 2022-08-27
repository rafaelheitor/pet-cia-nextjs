import { getServerSideProps } from '../../pages/index'

describe('Tests getServerSideProps function', () => {
  it('Should call the api and return a list of products', async () => {
    const res = await getServerSideProps()
    console.log(res)

    expect(res.props.data).toBeDefined()
  })
})
