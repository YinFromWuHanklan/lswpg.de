<script>
    export let open = false;
      import { slide } from 'svelte/transition';
      const handleClick = () => open = !open
  </script>
  
  <div class="accordion">
      <div class="header">
          <div class="text">
              <slot name="head"></slot>	
          </div>
          
          <button on:click={handleClick} >
            &#9660;
          </button>
      </div>
      
      {#if open}
      <div class="details" transition:slide>
          <slot name="details">
          </slot>
      </div>
      {/if}
  </div>
  
  <style lang="scss">
      .accordion {
          margin: 2rem auto;
          padding: 1rem;
          color: #FFF;
          border: 1px solid #FFF;
          border-radius: 2px;
          width: 80%;
          
          .header {
            display: flex;
            width: 100%;
            align-items: center;
            
            .text {
                flex: 1;
                margin-right: 5px;
                margin-top: 1rem;
            }

            button {
                background-color: transparent;
                border: none;
                color: #FFF;
                height: fit-content;
                padding: 0.8rem;
                font-size: 1.5rem;
            }
        }

        .details {
          padding:1rem;
        }


        @media (max-width: 672px) {
            width: 100%;
        }
      }
  </style>
  