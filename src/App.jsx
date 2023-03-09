import React from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
      <aside className='side_menu'>
        <section className='chat_history'>
          <button className='new_chat'>
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            <span className='new_chat--text'>New Chat</span>
          </button>
          <p>Unable to load history</p>
        </section>
        <section className="footer">
          <button className="footer_item">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <span className=''>Upgrade to Plus</span>
            {/* <span className=''>NEW</span> */}
          </button>
          <button className="footer_item">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            <span className=''>Light mode</span>
          </button>
          <a href="https://help.openai.com/en/collections/3742473-chatgpt" target="_blank">
            <button className='footer_item'>
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              <span className=''>Updates & FAQs</span>
            </button>
          </a>
          <button className="footer_item">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            <span className=''>Log out</span>
          </button>

        </section>
      </aside>
      <section className='chat_box'>
        <main className="main">
          <h1 className='main_header'>ChatGPT</h1>

          <section className="main_hero">
              <section className='main_hero--column'>
                  <section className="main_hero--column-title">
                        <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                        <h2>Examples</h2>
                  </section>
                  <section className="main_hero--column-list">
                        <button className="button_hero_text">Explain quantum computing in simple terms &#8594;</button>
                        <button className="button_hero_text">Got any creative ideas for a 10 year old’s birthday? &#8594;</button>
                        <button className="button_hero_text">How do I make an HTTP request in Javascript? &#8594;</button>
                  </section>
              </section>
              <section className='main_hero--column'>
                  <section className="main_hero--column-title">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6" height="1em" width="1em"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path></svg>
                      <h2>Capabilities</h2>
                  </section>
                  <section className="main_hero--column-list">
                        <p className="hero_text">Remembers what user said earlier in the conversation</p>
                        <p className="hero_text">Allows user to provide follow-up corrections</p>
                        <p className="hero_text">Trained to decline inappropriate requests</p>
                  </section>
              </section>
              <section className='main_hero--column'>
                  <section className="main_hero--column-title">
                        <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                        <h2>Limitations</h2>
                  </section>
                  <section className="main_hero--column-list">
                        <p className='hero_text'>May occasionally generate incorrect information</p>
                        <p className='hero_text'>May occasionally produce harmful instructions or biased content</p>
                        <p className='hero_text'>Limited knowledge of world and events after 2021</p>
                  </section>
              </section>    
          </section>

          <form>
            <input type="textarea" />
            
            <svg className='rogue_svg'
            stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>

          </form>
        </main>
        <footer className='footer'>
         <p><a href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes" target="_blank" rel="noreferrer">ChatGPT Feb 13 Version.</a> {" "}
        Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.</p>
        </footer>
      </section>
    </div>
  )
}

export default App
