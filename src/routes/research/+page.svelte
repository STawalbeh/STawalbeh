<script lang="ts">
    const papers = [
        {
            "title": "Towards the Characterization of Representations Learned via Capsule-based Network Architectures",
            "date": "Nov 2024"
        }
    ]
</script>

<section>
    <h1 class="title">Research Papers</h1>
    <div>
        {#each papers as paper}
            <div>
                <h2>{paper.title}</h2>
                <p><strong>Date:</strong> {paper.date}</p>
                <p><strong>Paper Link:</strong> <a href={paper.paper} target="_blank" rel="noopener noreferrer">Read Paper</a></p>
            </div>
        {/each}
    </div>
</section>