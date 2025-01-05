<script lang="ts">
    export let page: string = '';

    const is_active = (name: string): string => page === name ? "is-active" : "";
</script>

<div class="column is-narrow">
    <a href="."> <b style="font-weight: 800" class="title is-3"> {"STawalbeh"} </b> </a>
</div>

<div class="columns">
    <div class="column">
        <div class="tabs is-boxed is-left">
            <ul>
                 <!-- Research Tab -->
                <li class={is_active("research")}>
                    <a href="/research" class="is-flex is-align-items-center">
                        <span class="icon is-small">
                            <i class="fas fa-atom" aria-hidden="true"></i>
                        </span>
                        <span>Research</span>
                    </a>
                </li>


                <!-- Teaching Tab -->
                <li class={is_active("teaching")}>
                    <a href="/teaching" class="is-flex is-align-items-center">
                        <span class="icon is-small">
                            <i class="fas fa-chalkboard-teacher" aria-hidden="true"></i>
                        </span>
                        <span>Teaching</span>
                    </a>
                </li>

                <!-- Talks Tab -->
                <li class={is_active("talks")}>
                    <a href="/talks" class="is-flex is-align-items-center">
                        <span class="icon is-small">
                            <i class="fas fa-microphone" aria-hidden="true"></i>
                        </span>
                        <span>Talks</span>
                    </a>
                </li>

                <!-- Service Tab -->
                <li class={is_active("service")}>
                    <a href="/service" class="is-flex is-align-items-center">
                        <span class="icon is-small">
                            <i class="fas fa-concierge-bell" aria-hidden="true"></i>
                        </span>
                        <span>Service</span>
                    </a>
                </li>

            </ul>
        </div>
    </div>
    
</div>