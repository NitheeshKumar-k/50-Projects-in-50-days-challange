const text = document.getElementById('text');
const tagsContainer = document.getElementById('tags');

text.focus()

text.addEventListener('keyup', (e) => {
     createTags(e.target.value);

     if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10);

        RandomSelect();
     }
    
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    tagsContainer.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.innerText = tag;
        tagEl.classList.add('tag');
        tagsContainer.appendChild(tagEl);
    })
}

function RandomSelect() {
    const times = 30;
    const interval = setInterval(() => {
        const randomTag = selectRandomTag();
        highlightTag(randomTag);

        setTimeout(() => {
            removeHighLight(randomTag)
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)
        
        setTimeout(() => {
            const randomTag = selectRandomTag();
            highlightTag(randomTag)
        }, 100);
    }, times * 100);
}

function selectRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function removeHighLight(tag) {
    tag.classList.remove('highlight');
}