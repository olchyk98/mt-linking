use std::io::*;

use ratatui::{
  prelude::{Terminal, CrosstermBackend, Rect, Alignment, Layout, Constraint, Direction},
  widgets::{Paragraph, Block, BorderType, Borders, Tabs, Sparkline, block::Title}, style::{Style, Color, Stylize}, symbols::{self, block},
};

fn main () -> Result<()> {
  crossterm::terminal::enable_raw_mode()?;
  crossterm::execute!(std::io::stderr(), crossterm::terminal::EnterAlternateScreen)?;

  let mut terminal = Terminal::new(CrosstermBackend::new(std::io::stdout()))?;

  loop {
    std::thread::sleep(std::time::Duration::from_secs(1));

    terminal.draw(|frame| {
      let frame_rect = frame.size();

      let layout = Layout::new()
        .direction(Direction::Vertical)
        .constraints([
          Constraint::Length(1),
          Constraint::Min(0),
        ])
        .split(frame_rect);

      let tabs = vec!["@mediatool/mt-mediaplanning", "@mediatool/mt-webapp", "@mediatool/integrations"];
      let tabs_widget = Tabs::new(tabs)
        .select(0)
        .highlight_style(Style::default().fg(Color::Red))
        .divider(" ")
        .bg(Color::Rgb(40, 22, 49));

      let content_bg = Block::default()
        .bg(Color::Rgb(16, 23, 48));

      frame.render_widget(tabs_widget, layout[0]);
      frame.render_widget(content_bg, layout[1]);
    })?;

    if crossterm::event::poll(std::time::Duration::from_millis(1))? {
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
  crossterm::execute!(std::io::stderr(), crossterm::terminal::LeaveAlternateScreen)?;

  Ok(())
}
