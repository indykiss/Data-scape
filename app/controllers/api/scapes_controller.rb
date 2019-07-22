
class Api::ScapesController < ApplicationController 

    before_action :set_scape, only: [:show, :update, :destroy]

    def index 
        render json: Scape.all
    end 

    def create 
        scape = Scape.new(scape_params)
        if scape.save 
            render json: scape 
        else 
            render json: { message: scape.errors }, status: 400
        end 
    end 

    def show 
        render json: @scape
    end 

    def update 
        if @scape.update(scape_params)
            render json: @scape 
        else 
            render json: { message: @scape.errors }, status: 400
        end 
    end 

    def destroy 
        if @scape.destroy
            render json: { message: "Successfully deleted" }, status: 204
        else 
            render json: { message: "Unable to delete" }, status: 400 
        end 
    end 

    private 

    def set_scape
        @scape = Scape.find_by(id: params[:id])
    end 

    def scape_params 
        params.require(:scape).permit(:name, :stock, :start_date, :end_date, :history)
    end 


end