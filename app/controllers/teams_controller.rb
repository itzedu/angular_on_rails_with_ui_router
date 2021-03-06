class TeamsController < ApplicationController
	skip_before_action :verify_authenticity_token

	def index
		render_teams	
	end

	def create
		Team.create(team_params)
		render_teams
	end

	def show
		team_info = Team.find(params[:id])	
		render :json => { team: team_info, players: team_info.players }
	end

	def destroy
		Team.find(params[:id]).destroy
		render_teams	
	end

	private
		def render_teams
			render :json => Team.all
		end

		def team_params
			params.require(:team).permit(:name)
		end
end