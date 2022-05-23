const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Collection, Intents } = require('discord.js');
const { MessageAttachment, MessageEmbed } = require('discord.js');
const { MessageActionRow, MessageButton } = require('discord.js');
const fs = require('fs');

//Returns a Random Image
var lastImages = [];
function assignRandomImage(){
    var commandFiles = fs.readdirSync('./komi').filter(file => file.endsWith('.png'));
    var item = Math.floor(Math.random()*commandFiles.length);
    var randomImage = `./komi/${commandFiles[item]}`
	

	if (lastImages.indexOf(randomImage) == -1) {
        lastImages.push(randomImage)
        while (lastImages.length >= 10) {
            lastImages.shift()
        }
        console.log(randomImage)
		console.log(lastImages)
        
        return randomImage
		
    } else {
        console.log("before ran " + randomImage)
		while(lastImages.indexOf(randomImage) != -1) {
            console.log("ran again")
            commandFiles = fs.readdirSync('./komi').filter(file => file.endsWith('.png'));
            item = Math.floor(Math.random()*commandFiles.length);
            randomImage = `./komi/${commandFiles[item]}`
        }
		lastImages.push(randomImage)
		console.log(randomImage)
		console.log(lastImages)
		return randomImage
    }
	
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sendimage')
		.setDescription('sends an image'),
	async execute(interaction) {     

//Buttons
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('againbutton')
                .setLabel('Again!')
                .setStyle('PRIMARY'),
        );
        
//Embed
        randomimage = assignRandomImage()
        var attachment = new MessageAttachment(randomimage);
        const ImageEmbed = new MessageEmbed()
            .setColor('#00ddff')
            .setTitle('Heres your Image')
			.setImage(`attachment://${(randomimage.split("./komi/")[1])}`)
            .setTimestamp();
        
        msg = await interaction.reply({ embeds: [ImageEmbed], files: [attachment], components: [row], fetchReply: true });
        
		const filter = i => {
            if(i.customId === 'againbutton' && i.user.id === interaction.user.id) {
                return true;    
             } else {
                i.reply({ content: `These buttons aren't for you!`, ephemeral: true });
                return false;
            };
           
        }
		const collector = msg.createMessageComponentCollector({filter, time: 15000 });
		var count = 0;
		
//On Button Press
		collector.on('collect', i => {
			count++;
			console.log(`Collected ${count} interactions`)

            randomimage = assignRandomImage()
            attachment = new MessageAttachment(randomimage);
			const newEmbed = new MessageEmbed()
                .setColor('#00ddff')
                .setTitle(`New Komi (${count})`)
                .setImage(`attachment://${(randomimage.split("./komi/")[1])}`)
                .setTimestamp();
            i.update({ embeds: [newEmbed], files: [attachment], components: [row] });
            collector.resetTimer();

		});

        collector.on('end', i => {
            row.components[0].setDisabled(true);
        })
	},
};