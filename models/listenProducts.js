const {db} = require("./firestore.js")
const sendEmail = require("./sendMail.js")

// Referência para uma coleção
const productsRef = db.collection('products');

// Adiciona um listener para mudanças na coleção
productsRef.onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
            sendEmail("jebsantosalves@gmail.com", "Produto adicionado", "Um produto foi adicionado")
            console.log('Novo Produto');
        }
        if (change.type === 'modified') {
            sendEmail("jebsantosalves@gmail.com", "Produto atualizado", "Um produto foi atualizado")
            console.log('Produto modificado');
        }
        if (change.type === 'removed') {
            sendEmail("jebsantosalves@gmail.com", "Produto removido", "Um produto foi removido")
            console.log('Produto removido');
        }
    });
}, (error) => {
    console.error('Erro ao adicionar listener:', error);
});