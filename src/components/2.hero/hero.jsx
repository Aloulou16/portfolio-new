import './hero.css';
const Hero =()=>{
return (
    <section className='hero flex'>
        <div className='left-section '>
            <div className='parent-avatar'>
                <img src="./me-modified.png" className='avatar' alt="" />
                <span className='ddddd'><i class="fa-solid fa-check"></i>
</span>
<h1 className='title'>Software designer,<br /> founder and amateur <br /> astronaut</h1>
<p className='subtitle'>I'm mohamed ali dridi , a software designer and entrepreneur based in Tunis.  <br />  I'm the founder and Ceo of planetaria,where we develop <br /> technologies that empower regular people to explore space and their own <br /> terms</p>
<div className='all-icon flex'>
<div><i class="fa-brands fa-twitter"></i>
</div>
<div><i class="fa-brands fa-instagram"></i>
</div>
<div><i class="fa-brands fa-github"></i>
</div>
<div><i class="fa-brands fa-linkedin"></i>
</div>
</div>
            </div>
        </div>
        <div className='right-section animation border'>animation</div>

    </section>
);
}
export default Hero ;