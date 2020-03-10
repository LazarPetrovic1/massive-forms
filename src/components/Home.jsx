import React, { useState } from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/auth'

const Home = (props) => {
  const [see, setSee] = useState(true)
  const { logout, auth } = props

  return (
    <div className='container'>
      {see === false && (
        <div className='mt-5'>
          <i
            className='fas fa-undo fa-5x pointer darkbackground p-2'
            title='Revert changes'
            style={{color: 'forestgreen'}}
            onClick={() => setSee(true)}
          />
        </div>
      )}
      <div className='text-center mt-5' style={{display: see ? 'block' : 'none'}}>
        <h1
          className='text-primary px-3 py-2 darkbackground'
          style={{display: 'inline-block'}}
        >This is the home page.</h1>
      </div>

      <div className='scroller mt-5 darkbackground' style={{display: see ? 'block' : 'none'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h5 className='display-4 py-3 px-4 white'>Click on the button to remove everything</h5>
          <div className='py-5 px-5'>
            <i
              className='fas fa-window-close fa-5x pointer'
              title='Kill text'
              style={{color: 'firebrick'}}
              onClick={() => setSee(false)}
            />
          </div>
        </div>
        <p className='lead p-3 white'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita minus dolor quasi animi deleniti tenetur eveniet hic ullam, nulla beatae fuga consectetur cum aperiam molestias reprehenderit excepturi quo, ea, et molestiae. Libero error vero obcaecati eos ex quibusdam unde sunt provident itaque earum dolores, vel. Nihil quasi amet maiores incidunt aliquid necessitatibus tenetur officiis laudantium, odio id perferendis accusantium eveniet doloribus assumenda esse ad tempora ratione vel cumque rerum porro voluptates voluptatum deleniti vero! Dicta reiciendis magnam iste, tenetur dolores error dignissimos at! Hic repellat molestiae explicabo ab pariatur impedit, animi rerum sed, eum deserunt natus recusandae praesentium distinctio consequatur dolorem voluptatibus aut vitae ex numquam veniam temporibus, necessitatibus dolor voluptatem quibusdam? Natus aliquid sequi molestias placeat harum. Cupiditate voluptates expedita, pariatur! Perspiciatis rem, explicabo fugiat? Numquam nisi unde, magni? Voluptatum suscipit corporis illo nobis sint quas aut dicta quisquam facere rerum placeat veniam odio autem ab repellendus porro sed error reprehenderit, minima, ipsum dignissimos ea accusantium doloribus explicabo cumque? Totam minus, aliquam officiis beatae? Vel beatae optio, quibusdam perspiciatis, corrupti quo accusantium enim, provident atque velit voluptas iste suscipit? Qui expedita aspernatur quia! Vel odit voluptate non et provident ullam soluta reprehenderit voluptas accusamus repudiandae dolor quisquam quibusdam dolorum nam atque repellat, facilis magni, aut! Esse impedit nostrum necessitatibus provident. Omnis necessitatibus consequatur sit officia dolorem obcaecati exercitationem nemo dignissimos et itaque rerum ipsum debitis cum labore, modi nesciunt ipsa voluptatem sint suscipit architecto similique quas. Voluptates ex explicabo nisi voluptatum commodi porro, provident dolorum suscipit cupiditate aut. Excepturi, id dolor! Blanditiis tempore perferendis eaque ad culpa omnis dolor, alias odit, perspiciatis corporis facilis sint maxime dolorem debitis rerum consectetur eos ea voluptatem iste quo labore et. Iste repudiandae officiis optio alias maiores, tenetur eaque aperiam! Laudantium, dolorem. Voluptate, consequatur officiis neque voluptas, hic debitis nemo tempore commodi ipsam impedit, praesentium unde! Minima fugiat aperiam iusto sunt. Accusantium culpa itaque ipsam tenetur sed, et fuga ex molestias corrupti architecto animi consequuntur at dolor dolorum? Iusto repellat repellendus sit quasi nostrum nisi eaque omnis, sint, officia deserunt facilis possimus accusamus sed culpa. Soluta neque accusantium in velit, voluptas et deserunt omnis. Explicabo obcaecati, eaque debitis? Odio expedita aspernatur sed aut commodi reprehenderit suscipit ad quaerat, culpa cupiditate nam vitae quam, pariatur voluptates tempore, ullam voluptas qui necessitatibus, fuga facilis iusto maxime beatae aliquid repellendus. Quidem harum cupiditate facere possimus voluptas sint saepe ex nisi eum vel tenetur corporis maiores ad officia nam ipsam perspiciatis voluptatibus eveniet rerum maxime culpa vero quae laboriosam, dignissimos! Quia suscipit libero natus dolores! Beatae quos quia ad deserunt, sed aspernatur, enim iste hic voluptatem dolore repellat architecto autem animi repudiandae distinctio optio. Optio voluptatem reiciendis, qui quam quibusdam perspiciatis, provident libero culpa! Nam natus, voluptas?
        </p>
        <p className='display-3 p-5 white'>Lorem ipsum dolor sit amet, consectetur.</p>
      </div>
      <button onClick={logout} className='btn btn-info btn-block btn-lg' style={{display: see ? 'block' : 'none'}}>
        Log out
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Home)
