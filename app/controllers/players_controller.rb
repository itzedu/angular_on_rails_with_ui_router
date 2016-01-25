class PlayersController < ApplicationController
	skip_before_action :verify_authenticity_token 

	def index
		render_players
	end

	def create
		Player.create(player_params)
		render_players
	end

	def show
		player_info = Player.find(params[:id])
		render :json => { player: player_info, team: player_info.team.name }
	end

	def destroy
		Player.find(params[:id]).destroy
		render_players
	end

	private
		def render_players
			render :json => Player.all
		end

		def player_params
			params.require(:player).permit(:first_name, :last_name, :height, :age, :weight, :team_id)
		end
end