
export const geminiService = {
    generateServiceImage: async (prompt: string) => {
        // This is a placeholder for actual AI generation logic
        // For now, it returns a Picsum URL as a fallback
        console.log(`Generating image for: ${prompt}`);
        return `https://picsum.photos/seed/${prompt.replace(/\s/g, '')}/800/800`;
    }
};
