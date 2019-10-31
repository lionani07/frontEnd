class MessageView extends View {
    template(model) {
        return `
            <div class="alert alert-info">${model}</div>
        `;
    }
}
