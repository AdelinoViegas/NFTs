import Banner from "../img/banner.png";

export default function section2() {
	return (
		<section className="section2">
			<div className="number">
				<div>
					<span>10K+</span>
					<p>Artes</p>
				</div>
				<div>
					<span>200+</span>
					<p>Vendas</p>
				</div>
				<div>
					<span>20</span>
					<p>Artistas</p>
				</div>
			</div>
			<div className="info-item">
				<div className="phrase">
					<div>
						<p>Compre e utilize os nossos óculos com uma qualidade
							rica e confortável que permitirá ver com uma eficiência
							tem uma <span>resistência</span> boa adapta-se a varios ambientes seja quente ou frio adquira e desfrute desse produto.
						</p>
						<p>
							Óculos confortáveis.
						</p>
					</div>
					<div>
						<p>Compre e utilize os nossos óculos com uma qualidade
							rica e confortável que permitirá ver com uma eficiência
							tem uma <span>resistência</span> boa adapta-se a varios ambientes seja quente ou frio adquira e desfrute desse produto.
						</p>
						<p>
							Óculos confortáveis.
						</p>
					</div>
				</div>
				<div className="banner">
					<img src={Banner} alt="banner" />
				</div>
			</div>
		</section>
	);
}