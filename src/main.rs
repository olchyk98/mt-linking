use std::io::*;

use ratatui::{
  prelude::{Terminal, CrosstermBackend, Rect},
  widgets::Gauge,
};

fn main () -> Result<()> {
  crossterm::terminal::enable_raw_mode()?;
  crossterm::execute!(std::io::stdout(), crossterm::terminal::EnterAlternateScreen)?;

  let mut terminal = Terminal::new(CrosstermBackend::new(std::io::stdout()))?;

  let mut p = 0;

  loop {
    std::thread::sleep(std::time::Duration::from_secs(1));

    terminal.draw(|frame| {
      let rect = Rect { height: 40, width: 40, x: 0, y: 0 };
      p += 10;
      frame.render_widget(Gauge::default().percent(p), rect);
    })?;

    if crossterm::event::poll(std::time::Duration::from_millis(16))? {
      if let crossterm::event::Event::Key(key) = crossterm::event::read()? {
        if key.kind == crossterm::event::KeyEventKind::Press {
          match key.code {
            crossterm::event::KeyCode::Char('q') => break,
            _ => ()
          }
        }
      }
    }
  }

  crossterm::terminal::disable_raw_mode()?;
  crossterm::execute!(std::io::stdout(), crossterm::terminal::LeaveAlternateScreen)?;

  Ok(())
}
