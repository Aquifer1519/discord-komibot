const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Collection, Intents } = require('discord.js');
const { MessageAttachment, MessageEmbed } = require('discord.js');
const { MessageActionRow, MessageButton } = require('discord.js');
const fs = require('fs');
var count=0;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('test'),

	async execute(interaction) {
		const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('testbutton')
                .setLabel('test')
                .setStyle('PRIMARY'),
        );
		await interaction.reply({ content: "test", components: [row]});
			

		const filter = i => {
            if(i.customId === 'testbutton' && i.user.id === interaction.user.id) {
                return true;    	
             } else {
                i.reply({ content: `These buttons aren't for you!`, ephemeral: true });
                return false;
            }
            
        }
		
		const collector = interaction.channel.createMessageComponentCollector({filter});
		
//On Button Press
		collector.on('collect', i => {
			console.log(`Collected ${count} interactions`)

			
            i.update({ content: "fart fartf afatfsat", components: [row] })
			
		});



			
	},
};