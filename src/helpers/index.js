export const removeHtmlTags = (input) => {
    const cleanText = input.replace(/<[^>]*>/g, '');
    const finalText = cleanText.replace(/<\/?i>/g, '');
    return finalText;
};

export const removeHtmlTagsAndTruncate = (input, maxLength = 700) => {
    const cleanText = input.replace(/<[^>]*>/g, '');
    const finalText = cleanText.replace(/<\/?i>/g, '');

    let truncatedText = finalText.substring(0, maxLength);
    if (finalText.length > maxLength) {
        truncatedText += '...';
    }

    return truncatedText;
};