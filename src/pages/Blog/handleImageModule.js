const handleImageModule = {
    handleImage: function (dataUrl, type, imageData) {
      console.log(imageData);
      const imageUrl = 'https://www.infomoney.com.br/wp-content/uploads/2022/01/FJkLjuCXMAYC1MO.jpg?fit=1280%2C720&quality=50&strip=all';
  
      const range = this.quill.getSelection();
      this.quill.insertEmbed(range.index, 'image', imageUrl);
    }
  };
  
  export default handleImageModule;
  